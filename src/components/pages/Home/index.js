import React from 'react';

import PrimarySearchAppBar from '../../PrimarySearchAppBar';
import RecipeReviewCard from '../../Card';
const link = "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";


class Home extends React.Component {
   constructor (props) {
      super(props);
      this.state = {
         isAuthenticated: false,
         name: 'FBDevc Jakarta',
         list:null,
         keyword:'',
      }
   }
   componentDidMount() {
      this.fetchData();
   }
   fetchData() {
      return fetch(link)
      .then(res => res.json())
      .then(res => {
         // console.log(res)
         this.setState({
            list:res
         });
      });
   }
   handleLogin = () => {
      this.setState({
         isAuthenticated: true
      });
   }
   handleForm = event => {
      this.setState({
         keyword: event.target.value
      });
   }
   render () {
      return (

         <div>
            { /* <Button onClick={this.handleLogin} children="Login" size="sm"/> */ }
            <PrimarySearchAppBar inputOnChange={this.handleForm}/>

            {/*<Status
               isAuthenticated={this.state.isAuthenticated}
               name={this.state.name}
            />*/}
            {this.state.list &&
               this.state.list
               .filter(article => {
                  return (
                     article.title.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
                     article.content.toLowerCase().includes(this.state.keyword.toLowerCase())
                  )
               })
               .map(article => {
                  return (
                     <div key={article.id}>
                        <RecipeReviewCard title={article.title} subheader={article.created_at} content={article.content}/>
                     </div>
                  );
               })
            }
         </div>
      );
   }
}
export default Home;
