import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

function Main() {
    console.log('Inside Main()!!!!');
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');
    const items = useSelector(store => store.searchReducer);

    useEffect(() => {
        dispatch({
            type: 'CLEAR_ITEM_LIST'
        }); 
    }, []);

    const onSearch = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'SEARCH_FOR_ITEMS',
            payload: searchInput
        });
    }

    return (
        <>
            <form onSubmit={onSearch}>
                <input
                    placeholder="find something"
                    type="text"
                    value={searchInput}
                    onChange={evt => setSearchInput(evt.target.value)}
                />
                <input type="submit" value="Search" />
            </form>

            <ul>
                {items.map(item => (
                        <div key={item.id}>
                            <img src={item.image_path} style={{maxWidth: '150px'}}/>
                            <br />
                            {item.title}
                            <br />
                            {item.description}
                        </div>
                ))}
            </ul>
        </>
    )
}

export default Main;