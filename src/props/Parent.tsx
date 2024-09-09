import {Child} from './Child';
import {ChildAsFC} from "./Child";

const Parent = () => {
    return <ChildAsFC color='red' onClick={()=> console.log("clicked")}>alskf</ChildAsFC>
}