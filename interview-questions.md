# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.









1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: 
To add an additional column, we would need to run:

$rails generate migration accuracte_reason_for_migration

This will create a new migration file that will have a strange filename, but will indicate the identical name referenced as a class, in PascalCase, it should look something like this:

class AccuracteReasonForMigration ...
def change 
end
end

We will manually edit the migration file, in between the method called change, we will insert the line:

add_column :students, :cohort_id, :number

% where by default: add_column :model_we_are_modifying, :new_column, :data_type

Once this change has been made, we head back to the terminal and run the command:

$ rails db:migrate

This command will change the schema (the data structure's shape) into whatever we want, in this case adding a foregin key to students. As referenced above, we name the foregin key as the modelname we are associating with attached to _id ; overall this situtation would call us to make cohort_id for the students' model. Cohort has the primary key and is the big database we are relating smaller models to, students, therefore students will have the foregin key and cohort will have the primary key.



Researched answer:
Any necessary changes that needs to be fixed will require the developer to use Active Record Migrations. All of the commands will be done in the regular terminal, and will need the ability to access the migration folder of the Rails App. The steps are as labeled, and are exclusive to this problem:

    1. Head back to the terminal
    2. Run the command: $rails generate migration add_foregin_key_to_students
        a) We should see green text that validated the creation of a migration file
    3. Go to your prefered code editor, and enter the migration folder as followed, and enter the specific migration folder, the only indicator is looking at first line of each file.
    4. From there you should see something like this:

    class AccuracteReasonForMigration < ActiveRecord::Migration[7.0]
        def change 
        end
    end
    5. Inbetween the change method create a new line by pressing space. In that line write the command as shown: 

    add_column :students, :cohort_id, :number
    6. Check if these are the changes we want
    7. To finalize the change, head back to terminal and run the command: $rails db:migrate
        a) This code will change the schema (actual data structure), and our changes should be visible in the schema file.

The foreign key named as convetion as :modelname_id; where modelname is the parent model we want to associate the child model to. Hinted by the question Cohort has_many students, and so Student belongs_to cohort. By this relation Cohort will have the primary key, and the Student model will have a foreign key associating them to a Cohort.


I have used foreign keys before in the past, I used it to create a relation / association to an existing table and another table. In my particular example I was tasked to create an associaiton of BlogPost to Users. Users were able to create BlogPosts, but there was not a way, yet to tell whose BlogPosts were which Users. In this situtation, I settled that Users will have the primary key, and the BlogPosts will have the foreign key. BlogPosts foreign key was named user_id, where user_id would relate to the Users primary key. And there the relation was set.









2. Which RESTful routes must always be passed params? Why?

Your answer: 
The restful routes realtes to the routes.rb file on a rails app, so all the restful routes should be get, new, show, post, edit, put, and delete (... I think). 
- Show requires a param to display a specific content referenced by id key 
- Post requires a param to instantiate a class with paramters, but... I guess there can be scenarios where we would just need to instatiate something and just need the id tied to it?
- Edit requires param an id to change something specific in the table, and usually other params to change existing values 
- Put same thing for edit routes 
- Delete requires a id param to delete something specifically.

New and Get are the restful routes that don't need params
Show, Post, Edit, Put, Delete need params  
<!-- Its so wrong ...  -->


Researched answer:
The RESTful routes are Index, Show, New, Create, Update, Delete, and Edit.

The RESTful routes that always require a param are SHOW, DELETE, EDIT, and UPDATE. All these four require a param indicating the id to specify what is being shown, deleted, edited, or updated. The others routes get, post, and put don't need params at all. Index displays all the content of a table without any params. New directs the user to a form without any params. Create establish new content without any params.


I have used RESTful routes before in my rails application, I used the respective routes with the appropriate http verb to allow my users to navigate the protoype website. When they first arrive they will be place on the root page, usually the index page, which was similar to mines. There was exisitng posts from before that were being displayed with the INDEX route. On that same page I given the users the ability to see specific posts with SHOW, the ability to create new posts with NEW and then CREATE. RESTful routes are integral in providing CRUD actions for the developers and users. 









3. Name three rails generator commands. What is created by each?

Your answer:
$ rails generate model 
    Rail generates a model that can have columns of data or associations
$ rails generate resource model
    Rails generate a model that can have columns of data or associations +++ Rails generates controller file, Rails generates view folder, and Rails generates routes too
$ rails generate migration 
    Rails generates a migration file that can potentially alter the existing schema (data structure)


Researched answer:

$ rails generate model 
    Rail generates a new model with as many columns as the developer wants. These columns can be used to characterize the model, or be used for associations. Additionally, a migration file is made too.
$ rails generate resource model 
    Rail generates a new model with as many columns as the developer wants. These columns can be used to characterize the model, or be used for associations. Additionally, a migration file is made, controller file is made, a view folder is made, necessary routes were created, helpers were made, helper spec files are created too. This commands does autotmates a lot of actions, and is incredibly useful. 
$ rails generate migration
    Rail generates a migration file with the specified name in a arbitrary named file. Inside there is already a method called changee that indicates a place, the developer may write their changes to the exisitng schema. 

I have use all of these rails generate commands before, mostly $ rails generate migration because sometimes I do name my columns incorrect names, or I forget to add them in the first place. This generate command has saved me from restarting my rail projects. I defeintely have note this command to memory!









4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Tied to the index method, displays all instances of students

action: "POST" location: /students
Tied to the create method, this allows users to create a new student into the database

action: "GET" location: /students/new
Tied to the new method, this allows the user to view some sort of form to create a new student

action: "GET" location: /students/2
Tied to show method, this will display the a student with the id of 2 

action: "GET" location: /students/2/edit
Tied to edit method, this will display a form to edit a student with an id of 2

action: "PATCH" location: /students/2
Tied to update method, this will allow the user to directly change the values of student id 2 

action: "DELETE" location: /students/2
Tied to destroy method, will delete the entire instants of student id 2 








5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

    1. As a Developer: I want to create an application called To-Do List 
    2. As a Developer: I will have Tasks that will have a description, and completed status 
    3. As a Developer: I can add a Task directly to the database
    4. As a User: I can see all my Tasks and see their description and completed status
    5. As a User: I can add a new Task with the correct parameters 
    6. As a User: I can delete a Task, if I mistakenly added it or if it is irrelavent to me
    7. As a User: I can edit a Task
    8. As a User: I can update a Task's completed status if need be 
    9. As a User: I can click on a existing Task, and see only just that Task
    10. As a User: When I am redirected to a any new page, I can click on a button that will send me back to see all my Tasks.
