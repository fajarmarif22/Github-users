import React from 'react'
import { GithubContext } from '../context/context'
import styled from 'styled-components'

const Followers = () => {
  const { followers } = React.useContext(GithubContext)
  // const {}
  return (
    <Wrapper>
      <div className='followers'>
        {followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower
          return (
            <article key={index}>
              <img src={img} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background: #eff5f5;
  box-shadow: 1px 0px 2px 0px #874c62;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  position: relative;

  &::before {
    content: ' followers';
    position: absolute;
    top: 0;
    left: 0;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 550;
    transform: translateY(-100%);
    background: #eff5f5;
    color: var(--clr-grey-5);
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  .followers {
    overflow: auto;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }
  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-white);
      border: 1px solid var(--clr-primary-5);
      margin-top: 10%;
      position: relative;
      top: 10px;
      border-radius: 5px;
      padding: 2px;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      background: var(--clr-primary-5);
      cursor: pointer;
      &:hover {
        background: var(--clr-white);
        color: var(--clr-primary-5);
      }
    }
  }
`
export default Followers
