import React from 'react';
import './skills.css';
import {BiCheck} from 'react-icons/bi';
const skills = () => 
{
    return (
        <section id="skills">
        <h5>What Skills I Have</h5>
        <h2>My Skills</h2>
        <div className='container skills__container'>
            <article className='skills'>
                <div className='skills__head'>
                    <h3>Technologies</h3>
                </div>

                <ul className='skills__list'>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>C</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>C++</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>HTML</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>CSS</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>SQL</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>DSA</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>JavaScript</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>Node js</p>
                </li>

                </ul>
            </article>

            <article className='skills'>
                <div className='skills__head'>
                    <h3>Tools</h3>
                </div>

                <ul className='skills__list'>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>Bitbucket</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>Docker</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>Github</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>phpMyAdmin</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>Mongo DB</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>MySQL</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>Email js</p>
                </li>
                </ul>
                <br></br><br></br>
            </article>

            <article className='skills'>
                <div className='skills__head'>
                    <h3>Frameworks</h3>
                </div>
                <ul className='skills__list'>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>Bootstrap</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>React js</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>Material UI</p>
                </li>
                <li>
                    <BiCheck className="skills__list-icon" />
                    <p>Express js</p>
                </li>
                </ul>
                <br></br><br></br><br></br><br></br><br></br><br></br>
            </article>
        </div>
      </section>
    )
}

export default skills;