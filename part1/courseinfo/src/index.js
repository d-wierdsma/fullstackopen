import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>
                {props.part} {props.exercises}
            </p>
        </div>
    )
}

const Content = (props) => {
    console.log(props.course.parts)
    return (
        props.course.parts.map(item => <Part part={item.name} exercises={item.exercises}/>)
    )
}

const Total = (props) => {
    let total = 0
    props.course.parts.map(item => total = total + item.exercises)
    return (
        <div>
            <p>Number of exercises {total}</p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }


    return (
        <>
            <Header course={course} />
            <Content course={course}/>
            <Total course={course}/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))