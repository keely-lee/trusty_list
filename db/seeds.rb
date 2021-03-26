# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


john_dillinger = User.create!(email: 'john_dill@gmail.com', password: 'password1')
kate_barker = User.create!(email: 'kate_barks@aol.com', password: 'password2')
# jesse_james = User.create!(email: 'jj_banks@yahoo.com', password: 'password3')

groceries = List.create!(user_id: john_dillinger.id, name: 'groceries')
heist = List.create!(user_id: john_dillinger.id, name: 'heist')
tech = List.create!(user_id: kate_barker.id, name: 'tech')

task1 = Task.create!(list_id: groceries.id, title: 'Trader Joes', description: 'Stuff for Chili')
task1.comments = ['impossible meat', 'beans', 'corn', 'salt & pepper', 'chili powder']
task1.save!

task2 = Task.create!(list_id: heist.id, title: 'Buy Tools', description: 'Buy tools from the hardware store', comments: ['lock pick', 'stethoscope', 'mask', 'black gloves'])
task3 = Task.create!(list_id: heist.id, title: 'Plan Route', description: 'Plan Travel and Return', comments: ['get building blueprint', 'plan access point', 'plan exit'])
task4 = Task.create!(list_id: heist.id, title: 'Prep Items', description: 'Random Prep Work', comments: ['rent car', 'case the building', 'find getaway driver'])
