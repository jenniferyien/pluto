const {Router, Route, Link} = ReactRouter;

const Homepage = React.createClass({
  render: function(){
    return (
      <div>
        <h1>hello</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/listvampires'>Vampire Listing</Link></li>
          <li><Link to='/vampire/new'>Vampire Addition</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

const IndexListing = React.createClass({
  getInitialState: function(){
    return {vampireListing: []};
  },
  componentDidMount: function(){
    $.ajax({
      url: '/vampires',
      method: 'GET',
      success: function(vampireResults, error, xhr){
        this.setState({vampireListing: vampireResults});
      }.bind(this)
    })
  },
  render: function(){
    var vampires = this.state.vampireListing.map(function(vampire, index){
      return (
        <li><Link to={'/listvampires/'+index}>{vampire.name}</Link></li>
      )
    })
    return (
      <div>
        <ul>
          {vampires}
        </ul>
      </div>
    )
  }
});

const ShowListing = React.createClass({
  getInitialState: function(){
    return {vampireListing: []};
  },
  componentDidMount: function(){
    $.ajax({
      url: '/vampires',
      method: 'GET',
      success: function(vampireResults, error, xhr){
        this.setState({vampireListing: vampireResults});
      }.bind(this)
    })
  },
  deletingVampire: function(vampire){
    $.ajax({
      url: '/vampire/delete',
      method: 'DELETE',
      data: {name: vampire},
      success: function(data, error, xhr){
        console.log('success');
      }
    })
  },
  handleDeletion: function(event){
    var vampire = React.findDOMNode(this.refs.vampire).value;
    this.deletingVampire(vampire)
    document.location = '/';
  },
  render: function(){
    var vampireNumber = this.props.params.id
    var click = this.handleDeletion
    var vampires = this.state.vampireListing.map(function(vampire, index){
      if (vampireNumber == index){
        return (
          <div>
            <button onClick={click} ref='vampire' value={vampire.name}>Delete {vampire.id}</button>
            <button><Link to={'/listvampires/'+index+'/update'}>Edit</Link></button>
            <h2>{vampire.name}</h2>
            <ul>
              <li><strong>Location:</strong> {vampire.location}</li>
              <li><strong>Date of Birth:</strong> {moment(vampire.dob).format("MMMM Do YYYY")}</li>
              <li><strong>Gender:</strong> {vampire.gender}</li>
              <li><strong>Victim Count:</strong> {vampire.victims}</li>
              <li><strong>Hair Color:</strong> {vampire.hair_color}</li>
              <li><strong>Eye Color:</strong> {vampire.eye_color}</li>
              <li><strong>Loves:</strong> {vampire.loves.join(', ')}</li>
            </ul>
          </div>
        )
      }
    })
    return (
      <div>{vampires}</div>
    )
  }
});

const NewVampire = React.createClass({
  render: function(){
    return (
      <div>
        <Form />
      </div>
    )
  }
});

var Form = React.createClass({
  addingVampire: function(hash){
    $.ajax({
      url: '/vampire/create',
      method: 'POST',
      data: hash,
      success: function(data, error, xhr){
        console.log('success');
      }
    })
  },
  handleSubmit: function(event){
    event.preventDefault();
    var name = React.findDOMNode(this.refs.name).value;
    var dob = React.findDOMNode(this.refs.dob).value;
    var gender = React.findDOMNode(this.refs.gender).value;
    var location = React.findDOMNode(this.refs.location).value;
    var hair = React.findDOMNode(this.refs.hair).value;
    var eye = React.findDOMNode(this.refs.eye).value;
    var victims = React.findDOMNode(this.refs.victims).value;
    var loves = React.findDOMNode(this.refs.loves).value.split(',');

    var properties = {name: name, hair_color: hair, eye_color: eye, dob: dob, loves: loves, location: location, gender: gender, victims: victims};
    this.addingVampire(properties)
    document.location = '/';
  },
  render: function(){
    return (
      <form action='/vampire/create' method='post' onSubmit={this.handleSubmit}>
        <label>Vampire Name:</label>
        <input type='text' ref='name' id='name'/> <br/>

        <label>Date of Birth:</label>
        <input type='date' ref='dob' id='dob'/> <br/>

        <label>Gender:</label> <br/>
        <input type="radio" ref='gender' name="sex" value="m"/>Male <br/>
        <input type="radio" ref='gender' name="sex" value="f"/>Female <br/>

        <label>Location:</label>
        <input type='location' ref='location' id='location'/> <br/>

        <label>Hair Color</label>
        <input type='text' ref='hair' id='hair_color'/> <br/>

        <label>Eye Color</label>
        <input type='text' ref='eye' id='eye_color'/> <br/>

        <label>Hobbies/Interests/Loves:</label>
        <input type='text' ref='loves' id='loves'/> <br/>

        <label>Number of Victims:</label>
        <input type='number' ref='victims' id='victims'/> <br/>

        <input type="submit" value="Submit"/>
      </form>
    )
  }
})

var UpdateListing = React.createClass({
  getInitialState: function(){
    return {vampireListing: []};
  },
  componentDidMount: function(){
    $.ajax({
      url: '/vampires',
      method: 'GET',
      success: function(vampireResults, error, xhr){
        this.setState({vampireListing: vampireResults});
      }.bind(this)
    })
  },
  updatingVampire: function(existingname, vampire){
    $.ajax({
      url: '/vampire/update',
      method: 'POST',
      data: {name: existingname,
        vamp: vampire},
      success: function(data, error, xhr){
        console.log('success');
      }
    })
  },
  handleUpdate: function(event){
    event.preventDefault();
    var oldname = React.findDOMNode(this.refs.existingname).value;
    var name = React.findDOMNode(this.refs.name).value;
    var dob = React.findDOMNode(this.refs.dob).value;
    var gender = React.findDOMNode(this.refs.gender).value;
    var location = React.findDOMNode(this.refs.location).value;
    var hair = React.findDOMNode(this.refs.hair).value;
    var eye = React.findDOMNode(this.refs.eye).value;
    var victims = React.findDOMNode(this.refs.victims).value;
    var loves = React.findDOMNode(this.refs.loves).value.split(',');

    var properties = {name: name, hair_color: hair, eye_color: eye, dob: dob, loves: loves, location: location, gender: gender, victims: victims};
    this.updatingVampire(oldname, properties);
    document.location = '/listvampires/';
  },
  render: function(){
    var vampireNumber = this.props.params.id
    var update = this.handleUpdate;
    var vampires = this.state.vampireListing.map(function(vampire, index){
      if (vampireNumber == index){
        return (
          <form action='/vampire/update' method='post' onSubmit={update}>
            <label>Vampire Name:</label>
            <input type="hidden" name="vampname" ref='existingname' value={vampire.name}/>
            <input type='text' ref='name' id='name' placeholder={vampire.name} required="true"/> <br/>

            <label>Date of Birth:</label>
            <input type='date' ref='dob' id='dob' placeholder={moment(vampire.dob).format("YYYY-MM-DD")} required="true"/> <br/>

            <label>Gender:</label> <br/>
            <input type="radio" ref='gender' name="sex" value="m"/>Male <br/>
            <input type="radio" ref='gender' name="sex" value="f"/>Female <br/>

            <label>Location:</label>
            <input type='location' ref='location' id='location' placeholder={vampire.location} required="true"/> <br/>

            <label>Hair Color</label>
            <input type='text' ref='hair' id='hair_color' placeholder={vampire.hair_color} required="true"/> <br/>

            <label>Eye Color</label>
            <input type='text' ref='eye' id='eye_color' placeholder={vampire.eye_color} required="true"/> <br/>

            <label>Hobbies/Interests/Loves:</label>
            <input type='text' ref='loves' id='loves' placeholder={vampire.loves.join(', ')} required="true"/> <br/>

            <label>Number of Victims:</label>
            <input type='number' ref='victims' id='victims' placeholder={vampire.victims} required="true"/> <br/>

            <input type="submit" value="Submit"/>
          </form>
        )
      }
    });
    return (
      <div>{vampires}</div>
    )
  }
});

React.render((
  <Router>
    <Route path='/' component={Homepage}>
      <Route path='/listvampires' component={IndexListing}/>
      <Route path='/listvampires/:id' component={ShowListing}/>
      <Route path='/listvampires/:id/update' component={UpdateListing}/>
      <Route path='/vampire/new' component={NewVampire}/>
    </Route>
  </Router>
), document.body);
