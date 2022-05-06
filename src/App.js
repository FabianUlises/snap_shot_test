import './App.css'
import GithubCard from './GithubCard/GithubCard'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <div className="App pt-5" >
      <Row>
        <Col style={{display: 'flex', justifyContent: 'center'}}>
          <GithubCard />
        </Col>
      </Row>
    </div>
  )
}

export default App
