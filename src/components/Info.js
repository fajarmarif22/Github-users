import React from 'react'
import { GithubContext } from '../context/context'
import styled from 'styled-components'
import { GoRepo, GoGist } from 'react-icons/go'
import { FiUsers, FiUserPlus } from 'react-icons/fi'

const UserInfo = () => {
  const { githubUser } = React.useContext(GithubContext)
  const { public_repos, followers, following, public_gists } = githubUser
  // console.log(public_repos)
  const items = [
    {
      id: 1,
      icon: <GoRepo className='icon' />,
      label: 'Repository',
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className='icon' />,
      label: 'Followers',
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className='icon' />,
      label: 'Following',
      value: following,
      color: 'purple',
    },
    {
      id: 14,
      icon: <GoGist className='icon' />,
      label: 'Gists',
      value: public_gists,
      color: 'yellow',
    },
  ]

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {items.map((item) => {
          return <Item key={item.id} {...item}></Item>
        })}
      </Wrapper>
    </section>
  )
}

const Item = ({ icon, label, value, color }) => {
  return (
    <article className='item'>
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: 3px 20px 3px 20px;
    padding: 1rem 2rem;
    background: #eff5f5;
    transition: filter 0.1s ease-out;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    box-shadow: 1px 3px 0px 0px #497174;
    /* filter: drop-shadow(0px 2px 1px 0px #497174); */
    transition: filter 0.4s ease-in-out;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 550;
    line-height: 24px;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #eff5f5;
      color: #da4a91;
      box-shadow: 1px 0px 1px 0px #888888;
    }
    .green {
      background: #eff5f5;
      color: var(--clr-primary-5);
      box-shadow: 1px 0px 1px 0px #888888;
    }
    .purple {
      background: #eff5f5;
      color: #5d55fa;
      box-shadow: 1px 0px 1px 0px #888888;
    }
    .yellow {
      background: #eff5f5;
      color: #f0b429;
      box-shadow: 1px 0px 1px 0px #888888;
    }
  }

  .item:hover {
    background: #eff5f5;
    color: #472d2d;
    /* box-shadow: 2px 1px 3px 0px #497174 inset; */
    filter: drop-shadow(2px 10px 2px #497174);
  }
`

export default UserInfo
