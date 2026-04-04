import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "@/routes";
import { DefaultLayout } from "./layouts";
import { Fragment } from "react";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        // Mặc định các trang sẽ có default layout, nếu layout = null thì không có layout
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
                        console.log(route);
                        
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
