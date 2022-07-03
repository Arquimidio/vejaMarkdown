import Header from "./components/Header";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="container">
        <Editor />
        <Previewer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
