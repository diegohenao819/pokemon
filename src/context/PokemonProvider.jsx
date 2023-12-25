import PropTypes from 'prop-types';
import {PokemonContext} from './PokemonContext'

const PokemonProvider = ({children}) => {
    return (
        <PokemonContext.Provider value={
            {
                name: 'Pikachu',
                power: 'Thunderbolt'
            }
        }>
                {children}
        </PokemonContext.Provider>  )
}

PokemonProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default PokemonProvider