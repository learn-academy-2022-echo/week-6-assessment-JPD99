# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The Active Record model: BlogPostsController is inheirting all the attributes of the class ApplicationController; BlogPostsController can access information from ApplicationController, and BlogPostsController can access information from itself too.
class BlogPostsController < ApplicationController
  def index
    # ---2) @posts is a instance varible that is assigned to display / contain all the contents within the database, BlogPost.
    @posts = BlogPost.all
  end

  # ---3) @post is another instance varible that has an Active Record call that will only display one specific item within the database, BlogPost, respective to the item's primary key / id. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Method "new" has an instance varible called @post that is attached to a .new method. The .new chain allows for the developer to instantiates a new model instant, but this is not saved within the database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) @post is a instance varible that has the .create method, which allows the developers to make a new instant and save it, simultaneously, a model instance. Below that are conditional statements that will redirect the user to the new instant of BlogPost if the new instant is created properly, if not the user will remain on the alias new_blog_post_path webpage.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) @post is another instance varible that has an Active Record call that will only display one specific item within the database, BlogPost, respective to the item's primary key / id; exactly the same as question ---3)
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) @post is an instance varible assigned to a specific content in the databsae, it is being updated with the .update method; the strong parameter is called blog_post_params. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) If the specific instant of BlogPost is not deleted, the user is redirected back to the instant that was intended to be deleted. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private is a keyword that revokes any calls involving a parameter, or whatever data sensitive content is underneath it. 
  private
  def blog_post_params
    # ---10) params are in reference to Strong Params; the .require method tells the devloper must have a :blog_post key (if not theres an error), and the .permit method refers to that the developer is only allowed to change the values of the :title, and :content keys. 
    params.require(:blog_post).permit(:title, :content)
  end
end
