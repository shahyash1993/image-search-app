import React, { Component } from "react";
import $ from "jquery";

class EdibleSticker extends Component {
  state = {
    mixUrls:
      "<div>Evidence=> <br/>1) http://bigfrog104.com/are-fruit-stickers-edible/ <br/>2)" +
      "https://curiosity.com/topics/fruit-stickers-are-edible/<br/> 3)" +
      "https://www.snopes.com/fact-check/fruit-stickers-edible/ <br/><br/>Experiment=>" +
      "https://www.youtube.com/watch?v=BClZx2W1Hsg <br/><br/>Group Experiments=>" +
      "https://www.reddit.com/r/todayilearned/comments/23ort6/til_that_it_is_safe_to_eat_the_stickers_that_are/ " +
      "<br/>Highly Trusted source=>" +
      "https://www.wikihow.com/Wash-Fruit-and-Vegetables <br/>A bit trusted src=>" +
      "https://www.quora.com/Are-fruit-stickers-really-edible <br/>AOL don't lie=>" +
      "https://www.aol.com/article/2016/05/08/10-little-known-facts-about-fruit-stickers/21373113/" +
      " <br/>Mix Reviews=>" +
      "https://www.quora.com/Fruit/Am-I-supposed-to-eat-the-little-stickers-on-my-apple </div>"
  };

  urlify = text => {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
      return '<a href="' + url + '">' + url + "</a>";
    });
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
  };

  componentDidMount(prevProps, prevState) {
    const myUrls = this.urlify(this.state.mixUrls);
    console.log("myUrls: ", myUrls);

    let fnl = $.parseHTML(myUrls);
    fnl = fnl[0].innerHTML;
    console.log("o/p: ", fnl);
    console.log("workplace: ", $("#workplace")[0].innerHTML);
    $("#workplace")[0].innerHTML = fnl;
  }

  render() {
    return <div id="workplace">change</div>;
  }
}

export default EdibleSticker;
