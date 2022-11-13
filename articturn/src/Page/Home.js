import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <hr />
            <Link to={'/article'}>Go to article Page</Link>
        </div>

    );
}
export default Home