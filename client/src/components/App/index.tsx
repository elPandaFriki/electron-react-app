import { Component } from "react";
import logo from "./logo.svg";
import styles from "./index.module.scss";

export default class App extends Component<{}, {}> {
  render() {
    return (
      <div className={styles.root}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
