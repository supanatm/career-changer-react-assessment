import Layout from "./Layout"
import { useState, useEffect } from "react"
import './style/Home.css'

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
  const [sector, setSector] = useState("");
  const [employee, setEmployee] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const addEmployee = () => {
    const newEmployee = {
      id: employee.length,
      name: name,
      lastname: lastname,
      position: position
    };
    setEmployee([...employee, newEmployee]);
    console.log([...employee, newEmployee]);
  }
  
  const removeEmployee = (id) => {
    const index = employee.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      const delEmployee = [...employee];
      delEmployee.splice(index, 1);
      setEmployee(delEmployee);
      console.log(delEmployee)
    }
  }

  useEffect(() => {
    setEmployee(mockEmployees);
  }, [])

  const handlerClickUser = () => {
    setSector('user');
  }
  const handlerClickAdmin = () => {
    setSector('admin');
  }

  if (sector === 'user') {
    return (
      <Layout>
        <div className="home-container">
            <div className="top">
                <h1>Generation Thailand <br /> Home - User Sector</h1>
            </div>
            <div className="btn">
                <button onClick={handlerClickUser}>User Home Sector</button>
                <button onClick={handlerClickAdmin}>Admin Home Sector</button>
            </div>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                      <th>Name</th>
                      <th>Last Name</th>
                      <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  {employee.map((emp) => (
                    <tr key={emp.id}>
                      <td>{emp.name}</td>
                      <td>{emp.lastname}</td>
                      <td>{emp.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </Layout>
    );
  }
  if (sector === 'admin') {
    return (
      <Layout>
        <div className="home-container">
            <div className="top">
                <h1>Generation Thailand <br /> Home - Admin Sector</h1>
            </div>
            <div className="btn">
                <button onClick={handlerClickUser}>User Home Sector</button>
                <button onClick={handlerClickAdmin}>Admin Home Sector</button>
            </div>
            <div className="form">
                <p>Create User Here</p>
                <input 
                    type="text" 
                    value={name}
                    placeholder="Name"
                    onChange={(event) => {setName(event.target.value)}} />
                <input 
                    type="text" 
                    value={lastname}
                    placeholder="Last Name"
                    onChange={(event) => {setLastname(event.target.value)}} />
                <input 
                    type="text" 
                    value={position}
                    placeholder="Position"
                    onChange={(event) => {setPosition(event.target.value)}} />
                <div className="btn-save">
                    <button onClick={addEmployee}>Save</button>
                </div>
            </div>
            <div className="data-table">
              <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {employee.map((emp) => (
                    <tr key={emp.id}>
                      <td>{emp.name}</td>
                      <td>{emp.lastname}</td>
                      <td>{emp.position}</td>
                      <td><a onClick={() => removeEmployee(emp.id)}>Delete</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="home-container">
        <div className="top">
          <h1>Generation Thailand <br /> React - Assessment</h1>
        </div>
        <div className="btn">
          <button onClick={handlerClickUser}>User Home Sector</button>
          <button onClick={handlerClickAdmin}>Admin Home Sector</button>
        </div>
      </div>
    </Layout>
  )
}

export default Home