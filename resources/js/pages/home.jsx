import { Component } from "react";
import { user } from "../services/authService";

class Home extends Component {
    render() {
        return (
            <div className="w-full min-h-screen pt-10">
                <div className="max-w-md m-auto p-5 bg-white border rounded">
                    <ul>
                        <li>error handing in forum</li>
                        <li>redux user data handling</li>
                        <li>docker integration</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;
