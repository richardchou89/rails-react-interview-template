module ApplicationHelper
  def react_component(component_name, data = {})
    json_data = data.to_json
    class_name = "react-#{component_name}"
    content_tag(:div, nil, id: data[:id], class: class_name, data: json_data).html_safe
  end
end
