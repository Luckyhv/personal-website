import React,{useState} from 'react'
import './Works.css'
import firebase from '../firebase';
import 'firebase/compat/firestore';

function Works() {
    const [projects, setprojects] = useState([])
    // eslint-disable-next-line
    const [loading, setloading] = useState(true)
    const firestore = firebase.firestore()
    const usersRef = firestore.collection('projects');

    usersRef.get()
        .then((querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
                const user = {
                    id: doc.id,
                    ...doc.data()
                };
                data.push(user);
            });
            setprojects(data);
            setloading(false)
        })
        .catch((error) => {
            console.error('Error getting documents: ', error);
        });
    return (
        <div className='works'>
            <h5 className='h5'>My Works</h5>
            <h2 className='h2'>Projects</h2>
            <div className="allp">
                {projects.map((item) => {
                    return (
                        <div className="singlep" key={item.id}>
                            <div className="allimgs">
                                <img src={item.imageUrl} alt="" className="pimg" />
                            </div>
                            <h3 className='h3'>{item.name}</h3>
                            <div className="plinks">
                                <a href={item.git} className='gitlink' target="_blank" rel="noreferrer">Github</a>
                                <a href={item.demo} className="demolink" target="_blank" rel='noreferrer'>Demo</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Works
