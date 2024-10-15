let newObj = {};

const posts = [
    '10-computer-programming.json', 'deeplearning.json', 'java_string.json', 'ngx.json', 'soup.json', 'Design_patterns.json', 'django.json', 'java_time.json', 'ngx_bootstrap.json', 'spark.json', 'IO.json', 'electron.json', 'java_util.json', 'node.json', 'spring.json', 'Rxjava.json', 'ember.json', 'javafx.json', 'npm.json', 'TestNG.json', 'express.json', 'javascriptcomparison.json', 'numpy.json', 'spring_JDBC.json', 'accessibility_attributes.json', 'features.json', 'javascriptfeatures.json', 'object_oriented.json', 'ai_basics.json', 'firebase.json', 'jmeter.json', 'pandas.json', 'spring_MVC.json', 'algolia.json', 'flutter.json', 'jquery.json', 'passay.json', 'spring_aop.json', 'ajax.json', 'flask.json', 'jqueryui.json', 'popper.json', 'algolia.json', 'flutter.json', 'jquery.json', 'passay.json', 'spring_aop.json', 'angular_material.json', 'foundation.json', 'jsoup.json', 'postgresql.json', 'angular_ui_component.json', 'fullpage.json', 'junit.json', 'protractor.json', 'anime.json', 'gatsby.json', 'jython.json', 'pyqt.json', 'aurelia.json', 'git.json', 'keeping_up_to_date.json', 'pyramid.json', 'backbone.json', 'go.json', 'keras.json', 'pytest.json', 'basic-computer.json', 'google-chart.json', 'knockout.json', 'pythonconcurrency.json', 'bokeh.json', 'graphql.json', 'koa.json', 'pythondesign.json', 'bootstrap.json', 'gson.json', 'kotlin.json', 'pythontips.json', 'bootstrap4.json', 'high-chart.json', 'laravel.json', 'pytorch.json', 'bulma.json', 'html.json', 'leaflet.json', 'r.json', 'c-23.json', 'introduction.json', 'lodash.json', 'rails.json', 'c++.json', 'ionic.json', 'machine_basics.json', 'react.json', 'caffe2.json', 'iosdev.json', 'matlab.json', 'reactnative.json', 'case_study.json', 'jasmine.json', 'meteor.json', 'riot.json', 'cherry.json', 'java.json', 'moment.json', 'routing_and_focus.json', 'cleanpython.json', 'java_collections.json', 'mongodb.json', 'ruby.json', 'codeigniter.json', 'java_date.json', 'multiple.json', 'rxjs.json', 'computer-science.json', 'java_exeption.json', 'mysql.json', 'rxpy.json', 'concurrency.json', 'java_functional.json', 'nativescript.json', 'scala.json', 'css.json', 'java_internationalization.json', 'net.json', 'scipy.json', 'd3.json', 'java_lang.json', 'netmvc.json', 'scraping.json', 'dart.json', 'java_math.json', 'nextjs.json', 'seaborn.json', 'datascience.json', 'java_regex.json', 'ngrx.json', 'servelets.json', 'css.json', 'java_internationalization.json', 'net.json', 'scipy.json', 'd3.json', 'java_lang.json', 'netmvc.json', 'scraping.json', 'dart.json', 'java_math.json', 'nextjs.json', 'seaborn.json', 'datascience.json', 'java_regex.json', 'ngrx.json', 'servelets.json', 'scala.json', 'webpack.json', 'what_ai.json', 'why_ai.json', 'what_is_ml.json', 'why_learn_ml.json', 'whylearnjavascript.json', 'xstream.json'
];

async function getData() {
    const fetchPromises = posts.map(async file => {
        try {
            let response = await fetch(`posts/${file}`);
            if (!response.ok) {
                throw new Error(`File not found: ${file}`);
            }
            let data = await response.json();
            newObj[file] = data.map(item => ({
                title: item.title.rendered,
                content: item.content.rendered,
            }));
        } catch (error) {
            console.error(error.message);
        }
    });

    await Promise.all(fetchPromises);
    console.log(newObj);
}

getData();