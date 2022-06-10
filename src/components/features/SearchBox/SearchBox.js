import React from 'react';
import styles from './SearchBox.module.scss';


class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});

    this.handleSearchBook();
  }

  handleSearchBook = () => {

    const {value} = this.state;
    fetch(
      `https://gnikdroy.pythonanywhere.com/api/book/?title_contains=${value}`)
      .then((res) => res.json())
      .then((data) => this.setState({
        items: data.results,
      }))
      .catch(err => console.log(err));
  }

  render() {

    return (
      <div id="search-box" className={styles.root}>
        <div className='container'>
          <div className={styles.box}>
            <div className={styles.title}>Search a book: </div>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </div>
          <div>
            {this.state.items.map((item) => (
              <ul key={item.id}>
                <li>{item.title}</li>
              </ul>
            ))
            }
          </div>
        </div>
      </div>
    );
  }

}

export default SearchBox;
