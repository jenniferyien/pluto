var MovieBox = React.createClass({
  getInitialState: function(){
    return {data: []};
  },
  loadMovie: function(title){
    $.ajax({
      url: 'https://www.omdbapi.com/',
      method: 'GET',
      data: {s: title},
      success: function(movieResult,status,xhr){
        this.setState({data: movieResult.Search});
      }.bind(this),
      error: function(xhr, status, error){
        console.log('error', error)
      }
    });
  },
  render: function(){
    return(
      <div>
        <MovieSearchForm onMovieSearch={this.loadMovie}/>
        <MovieList theList={this.state.data}/>
      </div>
    )
  }

});

var MovieSearchForm = React.createClass({
  handleSearch: function(event){
    event.preventDefault();
    var title = React.findDOMNode(this.refs.title).value;
    if (!title) {
      return;
    }
    this.props.onMovieSearch(title);
    React.findDOMNode(this.refs.title).value = '';
    return;
  },
  render: function(){
    return(
      <div>
        	<nav className='navbar navbar-inverse'>
          		<h4 className="navbar-text">Movie Search</h4>
          		<form className="navbar-form navbar-right" onSubmit={this.handleSearch}>
                  <div className="form-group">
                  	<input type='text' ref='title' placeholder='search' className='form-control' aria-describedby="sizing-addon3"/>
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
              </form>
        	</nav>
        </div>
    )
  }
});

var MovieList = React.createClass({
  render: function(){
    var arrayLoop = this.props.theList.map(function(movie){
        return (
          <Movie movie={movie}/>
        )
      });
      return(
        <div className="panel-group">

          {arrayLoop}

        </div>
      )
  }
});


var Movie = React.createClass({
  getInitialState: function(){
    return {info: []};
  },
  individualMovie: function(title){
    $.ajax({
      url: 'https://www.omdbapi.com/',
      method: 'GET',
      data: {t: title},
      success: function(movieResult,status,xhr){
        this.setState({info: movieResult});
      }.bind(this),
      error: function(xhr, status, error){
        console.log('error', error)
      }
    })
  },
  handleClick: function(event){
    event.preventDefault;
    var movieTitle = React.findDOMNode(this.refs.movie).text;
    this.individualMovie(movieTitle);
  },
  render: function(){
      return (
        <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a className="btn" role="button" data-toggle="collapse" ref='movie'  onClick={this.handleClick} href={"#collapseExample"+this.props.movie.imdbID}>
              {this.props.movie.Title}
            </a>
          </h4>
         </div>
         <div className="collapse" id={"collapseExample"+this.props.movie.imdbID}>
           <div className="well">
            <img src={this.state.info.Poster}/>
            </div>
          </div>
        </div>
      );
  }
});



React.render(<MovieBox/>,document.body);
