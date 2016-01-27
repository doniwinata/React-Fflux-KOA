import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Colors from 'material-ui/lib/styles/colors';
const containerStyle = {
  paddingTop:"-10px !important",color:"red",
};

const PostAvatar = React.createClass({

  render() {
    const standardActions = ("");

    return (
      <Card>

        <CardHeader
          title="Demo Url Based Avatar"
          subtitle="Subtitle"
          avatar="http://lorempixel.com/100/100/nature/"/>

        <CardTitle title="WE SUPPORT ANY TYPE OF DESIGN" subtitle="What follows is the full text of a message Stewart Butterfield sent to all Slack employees on Sunday, January 17, 2016. I asked him if I could share it externally, not only because it touched my heart, but because I think it’s an "/>
        <CardActions>
          <FlatButton label="Action1"/>
          <FlatButton label="Action2"/>
        </CardActions>
        
      </Card>

    );
  },
});

export default PostAvatar;
