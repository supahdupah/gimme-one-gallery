import React from "react";
import { withLocalize, Translate } from 'react-localize-redux';
//import movieTranslations from "./translations/movies.json";
//import spanishMovieTranslations from "./translations/es.movies.json";
import MovieList from "./MovieList";

class MovieListContainer extends React.Component {

  constructor(props) {
    super(props);    
    this.state = { movies: [] }
    this.addTranslationsForActiveLanguage();
  }

  componentDidMount() {
    fetch("/my-comments.json")
      .then(res => res.json())
      .then(movies => this.setState({ movies }))
  }

  componentDidUpdate(prevProps, prevState) {
    const hasActiveLanguageChanged = prevProps.activeLanguage !== this.props.activeLanguage;

    if (hasActiveLanguageChanged) {
      this.addTranslationsForActiveLanguage();
    }
  }

  addTranslationsForActiveLanguage() {
    const {activeLanguage} = this.props;

    if (!activeLanguage) {
      return;
    }
    
    import('../translations/${activeLanguage.code}.movies.json') 
      .then(translations => {
        this.props.addTranslationForLanguage(translations, activeLanguage.code)
      })
      .then(movies => this.setState({ movies }))
  }

  render() {
    return <MovieList movies={this.state.movies} />;
  }
}
export default withLocalize(MovieListContainer);


