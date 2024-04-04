import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { users } from "./service/users"
import Header from "./components/header"
import { Container } from "./components/containers";
import Card from "./components/UI/card"

const App = () => {

  const [post, setPosts] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  const createUser = (e) => {
    e.preventDefault()
    const newUser = {
      id: uuidv4(),
      name: name,
      age: age
    }

    if (newUser.name.length == 0 || newUser.age.length == 0) {
      alert("Please fill in all fields")
    } else {
      users.CREATE(newUser).then((res) => {
        window.location.href = "/"
      })
    }
  }

  const delateUser = (id) => {
    users.DELETE(id).then((res) => {
      window.location.href = "/"
    })
  }

  useEffect(() => {
    users
      .GET()
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <Header />
      <Container>
        <div className="mt-[50px] shadow-2xl rounded-xl p-5">
          <p className="text-center mb-5 text-[28px] font-semibold text-[#222956]">Add User</p>
          <form onSubmit={createUser} className="flex flex-col gap-5">
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 outline-none border-[2px] text-[#222956] font-medium text-[18px] focus:border-[#222956] duration-200 rounded-lg" type="text" placeholder="Enter name" />
            <input value={age} onChange={(e) => setAge(e.target.value)} className="w-full p-3 outline-none border-[2px] text-[#1b2144d4] font-medium text-[18px] focus:border-[#1b2144cb] duration-200 rounded-lg" type="number" max={100} placeholder="Enter age" />
            <button className="w-full bg-[#222956] py-3 text-white text-[18px] font-semibold rounded-lg hover:bg-[#222956cd] duration-200">ADD</button>
          </form>
        </div>
      </Container>
      <Container>
        <div className="grid grid-cols-3 gap-6 py-[60px]">
          {
            post.length &&
            post.map((item, index) => {
              return <Card key={index} data={item} onDelate={delateUser}/>
            })}
        </div>
      </Container>
    </>
  );
};
export default App;