class AddEmailConstraintToUsers < ActiveRecord::Migration
  def up
    execute %{
      alter table
        users
      add constraint
        email_must_be_company_email
      check ( email ~* '[A-Za-z0-9._%-]+@example.com' )
    }
  end
  def down
    execute %{
      alter table
        users
      drop constraint
        email_must_be_company_email
    }
  end
end
