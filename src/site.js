import React from 'react';
import './App.css';
import Movie from './movie';
import ModalExample from './addie';
import Rating from './stars';
const MoviesList=[
  
  {movieimg:'http://repliquesdefilms.fr/user/image/filmPictureList_652618large.png',
  movietitle:'Pulp fiction',
  moviedesc:'first movie of tarantino',
  rating:'4'},

  {movieimg:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5d608093-250f-4039-967f-ea8b3a36c56f/dd2xhtl-9d64dc81-0ac2-4aab-b2ce-ac16df98ce08.png/v1/fill/w_250,h_250,strp/inglourious_basterds_v_02_movie_folder_icon_by_dead_pool213_dd2xhtl-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNWQ2MDgwOTMtMjUwZi00MDM5LTk2N2YtZWE4YjNhMzZjNTZmXC9kZDJ4aHRsLTlkNjRkYzgxLTBhYzItNGFhYi1iMmNlLWFjMTZkZjk4Y2UwOC5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yi5fLMsZVMzagzp6XLYeBXjZiAUkyBBmmewm1OCwITk',
  movietitle:'Inglorious Basterds',
  moviedesc:'best of tarantino',
  rating:'3'},
  
  {movieimg:'http://manonaurore.e-monsite.com/medias/images/the-bride-2.jpg?fx=r_250_250',
  movietitle:'Kill Bill',
  moviedesc:'psycho',
  rating:'2'}

]


class Site extends React.Component {
constructor(props){
  super(props);
 this.state={
   minrate:0,
   movielist:MoviesList,
   search:''
 }
}
click=(e)=>{
  this.setState({
    minrate:e
  })
}
addNewMovie=(movieimg,movietitle,moviedesc,rating)=>{
  this.setState({
    movielist:this.state.movielist.concat({movieimg,movietitle,moviedesc,rating})
  })
}



  render(){
  return(
    <div className="App">
        <div className="star">
          <Rating modifyRating={this.click} rating={this.state.minrate} />
          <input className="searchinput" type="text" value={this.state.search.value} onChange={this.fonctionSearch} placeholder="Search film...." ></input>
        </div>
        <Movie  list= {!this.state.minrate?this.state.movielist:this.state.movielist.filter(el => (el.movietitle.toUpperCase().includes(this.state.search.toUpperCase())) && (el.rating == this.state.minrate) )}  />
        <ModalExample handleAdd={this.addNewMovie} />
      </div>
  )
}
}

export default Site;
