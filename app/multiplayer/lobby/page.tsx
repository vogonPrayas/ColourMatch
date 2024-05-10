import React from 'react'
import useStore from '../../store'
import { State } from '../../store'
import "../../css/lobby.css"
import "../../css/button.css"
import { useRouter } from 'next/navigation'

const LobbyPage = () => {
  const router = useRouter()
  const { name, lightMode, setCode, code, socket, Pname, setPname, setRandomMP, setOtherName } = useStore() as State

  const style = {
    color: lightMode ? "#58554D" : "black"
  }

  const [disable, setDisabled] = React.useState(false)

  const Disabled = {
    opacity: disable ? "40%" : ""
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        await socket.emit("join", { code, name })
      } catch (error) {
        console.log("error:", error)
      }
    }
    fetchData()
    return () => {
      socket.off('join')
    }
  }, [])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        await socket.on('name', (data: string[]) => {
          setPname(data)
          data.forEach(element => {
            if (element !== name) {
              setOtherName(element)
            }
          })
        })
      } catch (error) {
        console.log("error:", error)
      }
    }
    fetchData()
    return () => {
      socket.off('name')
    }
  }, [])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        await socket.on("disconnected", () => {
          console.log("MEOW MEOW")
          socket.emit("join", { code, name })
        })
      } catch (error) {
        console.log("error:", error)
      }
    }
    fetchData()
    return () => {
      socket.off("disconnected")
    }
  }, [])

  socket.on("BothReady", (data: string[]) => {
    console.log(data)
    setRandomMP(data)
    router.push("/multiplayer/game")
  })

  socket.on("Ready", (data: string) => {
    alert(data)
  })

  const click = () => {
    setDisabled(true)
    socket.emit("start", { code, name })
  }

  let nameta = Pname.map(data => <div className={`button sButton ${lightMode ? "lightButton" : "darkButton"}`}>{data}</div>)

  return (
    <>
      <div className="LobbyCon">
        <div className="name" style={style}>{code}</div>
        {nameta}
        <div className={`button sButton ${lightMode ? "lightButton" : "darkButton"}`} onClick={click} style={Disabled}>START</div>
      </div>
    </>
  )
}

export default LobbyPage
