import {FunctionComponent} from "preact";
import {useEffect,useState} from "preact/hooks";

type Quote = {
    id:number;
    quote:string;
}


const GetQuotes : FunctionComponent = () => {
    const [word, setWord] = useState<string>("");
    const [quote, setQuote] = useState<Quote>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(()=>{
        fetchQuote(word,page);
    },[word,page]);

    const fetchQuote = async (word:string,page:number)=>{
        const response = await fetch(`https://fernandomur-random-data-72.deno.dev/quotes?query=${word}&page=${page}`);
        const data = await response.json();
        setQuote(data);
    };

    return(
        <div class="QuoteDiv">
        <input type="text" value={word} onInput={(e)=>setWord(e.currentTarget.value)} class="search"/>
        <div class="texto">
        {quote.map((p) => (
                <div class="textos">
                    <h5>{p.quote}</h5>
                </div>
            ))} 
            </div>  
        <button class="bottonmovilidad2izq" onClick={() => setPage(page-1)}>Previous</button>
        <button class="bottonmovilidad2dcha" onClick={() => setPage(page+1)}>Next</button>
        </div>
    );
};

export default GetQuotes;

