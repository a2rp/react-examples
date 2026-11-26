import PublicApp from "./app/index.jsx";
import "./standalone.css";
import "./theme.css";

const App = () => {
    return (
        <main className="standaloneApp">
            <PublicApp />
        </main>
    );
};

export default App;
