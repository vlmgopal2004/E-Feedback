import React, { useState, useEffect } from 'react';
import NavigtionBar from '../components/NavigtionBar';
import Loader from '../components/Loader';
import { PiStudentFill } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { RiAdminLine } from "react-icons/ri";
import { VscPerson } from "react-icons/vsc";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {isLoading ? (
        <Loader />
      ) : (
        <div className='p-2'>
          <NavigtionBar />
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: 40, fontFamily:'Figtree, sans-serif'}}>E Feedback</h1>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50vh',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '60%',
              }}
            >
              <div
                style={{
                  flex: 1,
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  backgroundColor: '#B0C4DE',
                  margin: 4, fontFamily: 'Figtree, sans-serif', fontSize:20
                }}
              >
                <a href='/Student/SignIn'>
                  <PiStudentFill size={60} style={{margin:'auto'}}/>
                  <h2>Students</h2>
                </a>
              </div>

              <div
                style={{
                  flex: 1,
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  backgroundColor: '#B0C4DE',
                  margin: 4, fontFamily: 'Figtree, sans-serif', fontSize:20
                }}
              >
                <a href='/Faculty/Login'>
                  <LiaChalkboardTeacherSolid size={60} style={{margin:'auto'}}/>
                  <h2>Faculty</h2>
                </a>
              </div>

              <div
                style={{
                  flex: 1,
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  backgroundColor: '#B0C4DE',
                  margin: 4, fontFamily: 'Figtree, sans-serif', fontSize:20
                }}
              >
                <a href='/Adminlogin'>
                  <RiAdminLine size={60} style={{margin:'auto'}} />
                  <h2>Admin</h2>
                </a>
              </div>

              <div
                style={{
                  flex: 1,
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  backgroundColor: '#B0C4DE',
                  margin: 4,
                  fontFamily: 'Figtree, sans-serif', fontSize:20
                }}
              >
                <a href='/Anonymous'>
                  <VscPerson size={60} style={{margin:'auto'}}/>
                  <h2>Anonymous</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
