class CreateImages < ActiveRecord::Migration
  def self.up
    create_table :images do |t|
      t.references  :project
      t.string      "imagePath", :null => false
      t.string      "alt"
      t.boolean     "isHomeImage"
      t.timestamps
    end
  end

  def self.down
    drop_table :images
  end
end
