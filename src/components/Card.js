import React from 'react'
import { GithubContext } from '../context/context'
import styled from 'styled-components'
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md'
const Card = () => {
  const { githubUser } = React.useContext(GithubContext)
  const { avatar_url, html_url, name, company, blog, bio, location } =
    githubUser
  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className='bio'>{bio}</p>
      <div className='links'>
        <p>
          <MdBusiness /> {company}
        </p>
        <p>
          <MdLocationOn /> {location}
        </p>
        <a href={`https://${blog}`}>
          <MdLink></MdLink>
        </a>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  background: #eff5f5;
  /* border-color: hsla(89, 43%, 51%, 0.3); */
  /* border-style: solid; */
  box-shadow: 1px 0px 2px 0px #874c62;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 30px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 550;
  border-bottom-right-radius: 30px;
  padding: 1.5rem 2rem;
  position: relative;
  &::before {
    content: 'user';
    position: absolute;
    top: 0;
    left: 0;
    /* border-style: solid; */
    border-color: #497174;
    border-width: 3px;
    border-bottom: none;
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
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: var(--clr-grey-3);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      /* box-shadow: 1px 1px 1px 1px #ffff; */
      /* border-bottom: 2px #fff; */
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`
export default Card
