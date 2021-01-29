import Toolbar from '../../components/Toolbar/Toolbar';

function Layout(props) {
    return (
        <div>
            <Toolbar />
            {props.children}
        </div>
    )
}

export default Layout
