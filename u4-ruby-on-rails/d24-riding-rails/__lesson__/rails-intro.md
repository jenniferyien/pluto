# Rails Intro / ActiveRecord

##### LEARNING OBJECTIVES
- SWBAT Start a Rails Server/Console
- SWBAT Create ActiveRecord Models
- SWBAT Create and Run Database Migrations

### STEP 1: Riding Rails
- `rails new -Td postgresql`
- `rails server`
- `rails console`
- `rails generate model`
- `rake db:create`
- `rake db:migrate`

### STEP 2: ActiveRecord

```
class Blogger < ActiveRecord::Base
end
```

```
class Blog < ActiveRecord::Base
end
```

### STEP 3: ActiveRecord Associations

```
class Blogger < ActiveRecord::Base
  has_many :blogs
end
```

```
class Blogs < ActiveRecord::Base
  belongs_to :blogger
end
```
