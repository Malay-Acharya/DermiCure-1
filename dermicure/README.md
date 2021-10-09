# dermiCURE
dermiCURE is a website that makes use of a machine learning model to read images of skin diseases provided by the user and then predict which disease it is and give other important information to the user.

## About Our Model
Our model makes use of machine learning concepts to read a user-given image relating to skin diseases our model is trained to identify and give us the results of the identification it performs. Our API then takes this information and provides the user with all the necessary details concerning the disease.
### Technologies Used
* **SMOTE Algorithm:** SMOTE is an oversampling technique where the synthetic samples are generated for the minority class. This algorithm helps to overcome the overfitting problem posed by random oversampling.


**Data before oversampling**

![](https://i.imgur.com/EDjxioa.png)

**Data after oversampling**

![](https://i.imgur.com/CURNnqM.png)
    


* **Random Forest Classifier:** Random forest, consists of a large number of individual decision trees that operate as an ensemble. Each individual tree in the random forest spits out a class prediction and the class with the most votes becomes our model’s prediction
## About Our Dataset
Our dataset extends to over 10,000 images pertaining to 7 labels namely :
* Bowen's Disease
* Basal Cell Carcinoma
* Benign Keratosis-like Lesions
* Dermatofibroma
* Melanoma
* Melanocytic Nevi
* Vascular Lesions
## Rules
1. There should be enough light in the room when the user is clicking the picture.
2. The users have to make sure that the picture is clear and not blurred.
3. Please avoid using any kind of filters on the photos.
4. Make sure that the images are in .jpg format.
## Test Image Results



| Basal Cell Carcinoma, Dermatofibroma, Basal Cell Carcinoma, Dermatofibroma [2,4,2,4]|
| -------- |
| ![](https://i.imgur.com/uaeN5qo.png)
     
