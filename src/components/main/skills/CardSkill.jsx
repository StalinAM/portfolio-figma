import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.Description};
  padding: 1rem;
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`
const Type = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.Subtitle};
  padding: 0.5rem;
`
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  gap: 1rem 4rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.Description};
`
const Item = styled.li`
  display: flex;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.Description};
`
const Icon = styled.svg`
  color: ${(props) => props.theme.Title};
  width: 14px;
  @media screen and (max-width: 480px) {
    width: 12px;
  }
`
function CardSkill({ title, listSkills }) {
  return (
    <Card>
      <Type>{title}</Type>
      <List>
        {listSkills.map((item) => (
          <Item key={item.id}>
            <Icon
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 21 12'
            >
              <path d='m19.71 5.29-5-5A1 1 0 0 0 14 0H3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h11a1 1 0 0 0 .71-.29l5-5a1 1 0 0 0 0-1.42ZM13.59 10H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10.59l4 4-4 4Z' />
            </Icon>
            {item.name}
          </Item>
        ))}
      </List>
    </Card>
  )
}

export default CardSkill
