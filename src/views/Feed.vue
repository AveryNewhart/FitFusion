<script setup lang="ts">

import Nav from '../components/Nav.vue';

</script>

<!-- ADD COLOR SCHEME TO THE PAGE -->

<!-- HAVE A BUTTON TO ADD A POST. HAVE IT OPEN A MODAL THAT ALLOWS THE USER TO ENTER TEXT FOR A POST, A SPOT FOR A PHOTO FILE, AND THEN A CLOSE BUTTON FOR IF THE USER DOESNT WANT TO POST IT. -->

<!-- DECIDE WHAT OTHER CONTENT WILL BE ON THE FEED PAGE:
		-SEARCHBAR TO SEARCH USERS
		-ON DESKTOP, THE USERS PROFILE PICTURE AND USERNAME ON THE RIGHT OR LEFT SIDE TO TAKE UP SOME OF THE BLANK SPACE, MAYBE SEARCH BAR ABOVE THAT
		-WHATS NEW/RECENT NEWS SECTION ON DESKTOP TO TAKE UP SPACE? -->

<template>
 <div>
    <Nav />
 </div> 
  <div class="feedMainDiv">
	<div>
    	<h1 class="text-center font-bold text-xl feedHead">FitFusion Feed</h1>
	</div>
  <div class = "main panel panel-default">
    <div class = "panel-body">

      <div class="media">
        <div class="media-left">
          <!-- profile picture image will be here -->
          <img src="" class="media-object">
        </div>
        <div class="media-body">
          <p>name of person who posted<span class = "time">(time of post/how long ago)</span></p>
	        <span><i class = "fa fa-ellipsis-h right"></i></span>
        </div>
      </div>

      <div class = "post">
        <!-- if image for a post, it will be here. -->
        <!-- the image can be of the workout, calories burned, someones food, their running route, etc... -->
        <img class="not" src="">
        <p class="caption">caption of the post</p>
        <p class="iconsec"><i class="fa fa-heart-o"></i>  &nbsp; <i class = "fa fa-share"></i> <span class="right"><b>this will be where the likes are displayed</b></span></p>
        <p class="read">click here to view comment section(x amount of comments)(have dropdown menu appear) <span class="right"><b>Add Comment</b> <i class = "fa fa-comment-o"></i></span></p>
      </div>
    </div>
	</div>
  </div>

</template>

<style scoped>

.feedMainDiv {
	background-color: #2d2d2d;
	height: 100vh;
}

.feedHead {
	color: #925ff0;
}


.main{
	width: 	50vw;
	background-color: white;
  padding: 1vw;
	margin: auto;
	position: relative;
	top: 5vh;
  border: 1px solid red;
}

.media-object{
	width: 5vw;
	height: 5vw;
}

.media{
	padding: 0.5vw;
}

.media-body{
	padding-left: 1vw;
	font-size: 1.2vw;
	position: relative;
	top: 0.5vw;
}

.fa-ellipsis-h{
	position: relative;
	bottom: 2vw;
	font-size: 1.5vw;
	margin-right: 1vw;
}

.panel-body{
	padding: 1vw;
}

.not{
	height: 20vw;
	width: 100%;
}

.iconsec{
	padding-top: 1vw;
	padding-left: 0.5vw;
	font-size: 1.2vw;
}

.caption{
	padding-left: 0.5vw;
}

.read{
	padding-left: 0.5vw;
	cursor: pointer;
	color: grey;
}

.time{
	font-size: 0.8vw;
}

.fa{
	cursor : pointer
}

#open{
	width: 100%;
	background-color: #d32f2f;
}

#open:hover{
	background-color: white;
	color: #d32f2f;
}


@media only screen and (max-width: 425px){
	.main{
		width: 100vw;
	}

	.media-object{
	    width: 10.5vw;
	    height: 10.5vw;
    }

	.media{
	    padding: 1.5vw;
    }

	.media-body{
	    padding-left: 3vw;
	    font-size: 5.6vw;
	    position: relative;
	    top: 1.5vw;
    }

	.fa-ellipsis-h{
	    position: relative;
	    bottom: 10vw;
	    font-size: 5.5vw;
	    margin-right: 3vw;
    }

	.panel-body{
	    padding: 3vw;
    }

	.not{
	    height: 60vw;
	    width: 100%;
    }

	.iconsec{
	    padding-top: 3vw;
	    padding-left: 1.5vw;
	    font-size: 5.6vw;
    }

	.caption{
	    padding-left: 1.5vw;
    }

	.read{
	    padding-left: 1.5vw;
    }

	.time{
	    font-size: 3.5vw;
    }

	.menu{
		height: 9vw;
	}

	.menu a{
	    margin-left: 6vw;
	    margin-right: 6vw;
	    font-size: 6vw;
	    color: #d32f2f;
    }
}

</style>