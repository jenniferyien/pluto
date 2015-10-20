const {Router, Route, Link} = ReactRouter;

const App = React.createClass({
  render: function(){
    return (
      <div>
        <h2>I am the App Component</h2>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/articles'>Article List</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}); //App Const

const Articles = React.createClass({
  getInitialState: function(){
    return {data:[]};
  },
  componentDidMount: function(){
    $.ajax({
      url: '/posts',
      method: 'GET',
      success: function(postResults, error, xhr){
        this.setState({data: postResults});
      }.bind(this)
    });
  },
  render: function(){
    var articles = this.state.data.map(function(article){
      return (
        <Article info={article}/>
      )
    })
    return (
      <ul>
        {articles}
      </ul>
    )
  }
});

const Article = React.createClass({
  render: function(){
    return (
      <li>
        <h2>{this.props.info.title} <small>by {this.props.info.author}</small></h2>
        <p>{this.props.info.content}</p>
      </li>
    )
  }
});

React.render((
  <Router>
    <Route path='/' component={App}>
      <Route path='articles' component={Articles}/>
    </Route>
  </Router>
),document.body); //React render
