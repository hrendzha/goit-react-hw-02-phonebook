import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

function ContactListItem({ id, name, number, onClick }) {
    return (
        <>
            <span>
                {name}: {number}
            </span>
            <button
                className={s.btnDelete}
                type="button"
                onClick={() => onClick(id)}
            >
                Delete
            </button>
        </>
    );
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ContactListItem;
