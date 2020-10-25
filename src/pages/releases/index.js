import React from 'react'
import { Link } from "react-router-dom";
import { paramCase } from 'change-case';
import { artistsContent } from '../../content/artists';

const getReleasePath = (title) => title && `/releases/${paramCase(title)}`

const getReleasesContent = () => {
  let result = []

  artistsContent.forEach((content, index) => {
    content.releases.forEach(obj => {
      result.push(
        Object.assign(obj, {author: artistsContent[index].name})
      );
    })
  });
  
  return result
}

const ReleasesPage = () => {
  return (
    <div>
      <nav>
        <ul>
          {getReleasesContent().map((content, index) => (
            <li key={index}>
              <Link to={getReleasePath(content.title)}>
                {content.title}
                <br />
                {content.author}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ReleasesPage