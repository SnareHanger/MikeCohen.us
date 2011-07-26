class CreateProjects < ActiveRecord::Migration
  def self.up
    create_table :projects do |t|
      t.string  "title", :null => false
      t.string  "cssTitle", :null => false
      t.string  "position", :null => false
      t.text    "description", :null => false
      t.integer "homePosition", :null => false
      t.timestamps
    end
  end

  def self.down
    drop_table :projects
  end
end
