import './App.css'
import Card from './components/Card'
import img from './assets/img/image.jpg'
function App() {
  const cards = [{},{},{}]
    
  

  return (
    <>
      <Card title='title' imgsrc={img} desc='card description' link1='https://google.com' linkdesc1='google' link2='https://youtube.com' linkdesc2='youtube' />
      <Card title='title' imgsrc={img} desc='card description' link1='https://google.com' linkdesc1='google' link2='https://youtube.com' linkdesc2='youtube' />
      <Card title='title' imgsrc={img} desc='card description' link1='https://google.com' linkdesc1='google' link2='https://youtube.com' linkdesc2='youtube' />
    </>
  )
}

export default App
