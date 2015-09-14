class Calculator

  def add(x, y)
    x.to_f + y.to_f
  end

  def subtract(x, y)
    x.to_f - y.to_f
  end

  def multiply(x, y)
    x.to_f * y.to_f
  end

  def divide(x, y)
    x.to_f / y.to_f
  end

  def exp(x, n)
    x.to_f ** n
  end

  def square(x)
    x.to_f * x.to_f
  end

  def cube(x)
    x.to_f * x.to_f * x.to_f
    # or x.to_f ** 3
  end

  def sqrt(x)
    Math.sqrt(x.to_f)
  end

end
