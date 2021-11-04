import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import s from './ContactList.module.css';

function ContactList({ contacts, onContactDelete }) {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li className={s.listItem} key={id}>
                    <ContactListItem
                        id={id}
                        name={name}
                        number={number}
                        onClick={onContactDelete}
                    />
                </li>
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default ContactList;
