
$('#theSubmit').on('click',function(event){
  		event.preventDefault();

    var search = $("input:text#searchResult").val()

    $.ajax({
      url: 'https://itunes.apple.com/search',
      method: 'GET',
      data: {term: search},
      dataType: 'jsonp',
      success: function(artistResult, status, xhr){
        React.render(<ArtistAlbums data={artistResult}/>, document.getElementById('theList') );
                     console.log(artistResult);
      },
      error: function(xhr, status, error){
        console.log('error', error);
      }
    });


});


var TheForm = React.createClass({
  render: function(){
    return(
      <div>
      	<nav className='navbar navbar-inverse'>
      		<h4 className="navbar-text">Artist Search</h4>
      		<form className="navbar-form navbar-right">
            <div className="form-group">
            	<input type='text' id='searchResult' placeholder='search' className='form-control' aria-describedby="sizing-addon3"/>
            </div>
            <button type="submit" id='theSubmit' className="btn btn-default">Submit</button>
          </form>
      	</nav>
      	<div id='theList' className='container'></div>
      </div>
    )
  }
});

var ArtistAlbums = React.createClass({
  render: function(){
    var arrayLoop = this.props.data.results.map(function(album){
      <IndividualAlbum>
        <li>{album.artistName}</li>
        <p> {album.collectionName}</p>
      </IndividualAlbum>
    });
    return(
      <div>

        {arrayLoop}

      </div>
    )
  }
});

var IndividualAlbum = React.createClass({
  render: function(){
    return(
      <ul>
      {this.props.children}
      </ul>
    )
  }
});



React.render(<TheForm />, document.body);


// var TheForm = React.createClass({
//   render: function(){
//     return(
//       <div>
//       	<nav className='navbar navbar-inverse'>
//       		<h4 className="navbar-text">Artist Search</h4>
//       		<form className="navbar-form navbar-right">
//             <div className="form-group">
//             	<input type='text' id='searchResult' placeholder='search' className='form-control' aria-describedby="sizing-addon3"/>
//             </div>
//             <button type="submit" id='theSubmit' className="btn btn-default">Submit</button>
//           </form>
//       	</nav>
//       	<div id='theList' className='container'></div>
//       </div>
//     )
//   }
// });
