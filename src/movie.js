import React from 'react'
import Star from './stars';

export default function Movie({list}) {
   
        return (
            <section className="interface">
                <div className="Movie">
                    {   
                        list.map(el =>
                            <div className="Movieitem">
                                <img src={el.movieimg} alt="movie1" />
                                <h3>{el.movietitle}</h3>
                                <h6>{el.moviedesc}</h6>
                                <Star rating={el.rating} />
                                
                            </div>
                        )}
                </div>
            </section>
        )
    }
