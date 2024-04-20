import {FunctionComponent} from "preact";
import {useEffect,useState} from "preact/hooks";

type User = {
    id:number;
    name:string;
    username:string;
    created_at:string;
}


const GetUsers : FunctionComponent = () => {
    const [word, setWord] = useState<string>("");
    const [user, setUser] = useState<User[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(()=>{
        fetchUser(word,page);
    },[word,page]);

    const fetchUser = async (word:string,page:number)=>{
        const response = await fetch(`https://fernandomur-random-data-72.deno.dev/users?query=${word}&page=${page}`);
        const data = await response.json();
        setUser(data);
    };

    return(
        <div class="UserDiv">
        <input type="text" value={word} onInput={(e)=>setWord(e.currentTarget.value)} class="search"/>
        <div class="texto">
        {user.map((user) => (
                <div>
                    <h5>{user.name}</h5>
                    <h6>{user.username}</h6>
                    <h6>{user.created_at}</h6>
                </div>
            ))} 
            </div>
        <button class="bottonmovilidad3izq" onClick={() => setPage(page-1)}>Previous</button>
        <button class="bottonmovilidad3dcha" onClick={() => setPage(page+1)}>Next</button>
        </div>
    );
};

export default GetUsers;

