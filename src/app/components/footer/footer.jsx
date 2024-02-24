import styles from "./footer.module.scss";
import categories from "./footerDetails";
import { contact } from "./footerDetails";

const Footer = () => {
  return (
        <div className={styles.container}>
    <div className={styles.footer}>

      <div className={styles.categories}>
        <span>Categories</span>
        {categories.map((category, index) => (
            <a key={index} href={category.link}>
            {category.name}
          </a>
        ))}
      </div>
      <div className={styles.contact}>
        <span>Contact</span>
        {contact.map((contact, index) => (
            <a key={index} href={contact.link}>
            {contact.name}
          </a>
        ))}
      </div>

      <select id="countrySelect">
          <option value="us">United States</option>
          {/* Add other country options here */}
        </select>
    </div>
        </div>
  );
};
export default Footer;
