import { useState } from 'react';
import Header from './Header';
import RegisterUser from './Components/RegisterUser';
import HomeComponent from './Pages/Home/index';
import Footer from './Footer';
// import RegisterUser from './Components/RegisterUser'
import { Container } from './Global.styles';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleSave = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <Header />
      <Container >
        <RegisterUser onSave={handleSave} />
        <HomeComponent data={formData} />
      </Container>
      <Footer />
    </div>
  )
}

export default App;