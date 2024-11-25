export const columns = [
  "Question",
  "Question Type",
  "Answer Option 1",
  "Explanation 1",
  "Answer Option 2",
  "Explanation 2",
  "Answer Option 3",
  "Explanation 3",
  "Answer Option 4",
  "Explanation 4",
  "Answer Option 5",
  "Explanation 5",
  "Correct Answers",
  "Overall Explanation",
  "Domain",
];

export const sampleData = [
  {
    Question:
      "As a newly appointed AI infrastructure manager, you are tasked with setting up an AI environment using NVIDIA's software stack. Which components must you include to ensure optimized AI model training and deployment?",
    "Question Type": "multi-select",
    "Answer Option 1": "NVIDIA CUDA Toolkit",
    "Explanation 1":
      "NVIDIA CUDA Toolkit provides a comprehensive development environment for building GPU-accelerated applications, essential for AI model training.",
    "Answer Option 2": "NVIDIA TensorRT",
    "Explanation 2":
      "NVIDIA TensorRT is a high-performance deep learning inference library used to optimize and deploy trained models.",
    "Answer Option 3": "NVIDIA GameWorks SDK",
    "Explanation 3":
      "NVIDIA GameWorks SDK is a set of tools and resources for game development, not specifically related to AI model training or deployment.",
    "Answer Option 4": "NVIDIA Triton Inference Server",
    "Explanation 4":
      "NVIDIA Triton Inference Server is an inference-serving software that simplifies the deployment of AI models at scale.",
    "Answer Option 5": "NVIDIA Nsight Tools",
    "Explanation 5":
      "NVIDIA Nsight Tools are primarily used for debugging and profiling GPU applications, which are useful but not mandatory components of the AI software stack.",
    "Correct Answers": "1,2,4",
    "Overall Explanation":
      "To set up an optimized AI environment using NVIDIA's software stack, key components like the CUDA Toolkit, TensorRT, and Triton Inference Server are essential. CUDA Toolkit is fundamental for model training, TensorRT optimizes inference, and Triton Inference Server aids in deploying models efficiently. GameWorks SDK and Nsight Tools are not specifically required for AI model training and deployment.",
    Domain: "NVIDIA-Certified Associate: AI Infrastructure and Operations",
  },
  {
    Question:
      "In an AI environment leveraging NVIDIA's software stack, which components would you typically use for managing and deploying AI workloads efficiently?",
    "Question Type": "multi-select",
    "Answer Option 1": "NVIDIA CUDA Toolkit",
    "Explanation 1":
      "NVIDIA CUDA Toolkit provides a development environment for building GPU-accelerated applications, which is essential for AI workloads.",
    "Answer Option 2": "NVIDIA TensorRT",
    "Explanation 2":
      "NVIDIA TensorRT is a high-performance deep learning inference optimizer and runtime library, useful for deploying AI models but not directly for managing workloads.",
    "Answer Option 3": "NVIDIA GPU Cloud (NGC)",
    "Explanation 3":
      "NVIDIA GPU Cloud (NGC) offers a comprehensive catalog of GPU-optimized software, including pre-trained models and containers, crucial for managing and deploying AI workloads.",
    "Answer Option 4": "NVIDIA JetPack",
    "Explanation 4":
      "NVIDIA JetPack is a software development kit for building AI applications on NVIDIA Jetson devices. It is not directly related to managing and deploying AI workloads in a data center environment.",
    "Answer Option 5": "NVIDIA Triton Inference Server",
    "Explanation 5":
      "NVIDIA Triton Inference Server is a scalable and efficient platform for deploying AI models at scale, making it a key component for managing AI workloads.",
    "Correct Answers": "1,3,5",
    "Overall Explanation":
      "In an NVIDIA AI environment, the CUDA Toolkit is fundamental for developing GPU-accelerated applications. NGC provides a centralized resource for accessing and deploying pre-trained models and software containers, which simplifies AI workload management. The Triton Inference Server is essential for efficiently deploying AI models at scale, ensuring high throughput and low latency. Together, these components enable efficient management and deployment of AI workloads.",
    Domain: "NVIDIA-Certified Associate: AI Infrastructure and Operations",
  },
  {
    Question:
      "An AI development team is tasked with building an infrastructure for a new image recognition application. The application must handle both training and inference tasks efficiently. What are some key architectural considerations they should focus on to optimize both processes?",
    "Question Type": "multi-select",
    "Answer Option 1":
      "Ensure high memory bandwidth and capacity for training tasks.",
    "Explanation 1":
      "Training tasks often involve large datasets and complex models, necessitating high memory bandwidth and capacity to handle data efficiently.",
    "Answer Option 2":
      "Design for low-latency inference by optimizing data flow and model deployment.",
    "Explanation 2":
      "Inference requires low-latency processing for real-time or near-real-time predictions, which involves optimizing data flow and deployment strategies.",
    "Answer Option 3":
      "Prioritize high throughput and parallel processing capabilities in inference.",
    "Explanation 3":
      "Inference typically benefits from low-latency rather than high throughput; high throughput is more critical for training large datasets.",
    "Answer Option 4": "Use GPUs with Tensor Cores to accelerate training.",
    "Explanation 4":
      "GPUs with Tensor Cores are specifically designed to accelerate training tasks by providing powerful computation capabilities.",
    "Answer Option 5":
      "Deploy models on CPUs for the best inference performance.",
    "Explanation 5":
      "While CPUs are versatile, they are generally not the best choice for high-performance inference tasks compared to GPUs, which can handle parallel computations more efficiently.",
    "Correct Answers": "1,2,4",
    "Overall Explanation":
      "In AI infrastructure, training and inference have distinct architectural requirements. Training needs high memory bandwidth and GPUs with Tensor Cores to process complex models efficiently. Inference, on the other hand, benefits from low-latency design to ensure quick responses. While throughput is crucial for training, inference focuses more on latency. Therefore, the correct architectural considerations involve ensuring high memory bandwidth and capacity for training, optimizing data flow for low-latency inference, and using specialized hardware like GPUs with Tensor Cores to accelerate training.",
    Domain: "NVIDIA-Certified Associate: AI Infrastructure and Operations",
  },
  {
    Question:
      "A company is designing a new AI system and needs to decide on the architecture for both training and inference of their deep learning models. Which considerations should they prioritize specifically for the inference architecture compared to the training architecture?",
    "Question Type": "multi-select",
    "Answer Option 1": "Low latency to ensure real-time responses",
    "Explanation 1":
      "Low latency is crucial for inference systems, especially in real-time applications, to provide immediate responses.",
    "Answer Option 2": "High throughput to process large datasets quickly",
    "Explanation 2":
      "High throughput is more critical during training to process large datasets efficiently rather than for inference.",
    "Answer Option 3":
      "Power efficiency to reduce operational costs in production",
    "Explanation 3":
      "Power efficiency is important for inference as these systems often run continuously in production environments, impacting operational costs.",
    "Answer Option 4":
      "Support for distributed computing to handle large-scale model training",
    "Explanation 4":
      "Support for distributed computing is typically a requirement for training large models, not inference.",
    "Answer Option 5":
      "Flexibility in model experimentation for rapid prototyping",
    "Explanation 5":
      "Flexibility in model experimentation is a key consideration during the training phase to allow for testing and tuning various models.",
    "Correct Answers": "1,3",
    "Overall Explanation":
      "When designing architectures for AI systems, inference and training have different requirements. Inference architectures must prioritize low latency and power efficiency to meet the demands of real-time applications and cost-effective operations. Training architectures, on the other hand, focus on high throughput and support for distributed computing to handle extensive model training processes. Flexibility in experimentation is also more relevant during training as it involves frequent model adjustments and optimizations.",
    Domain: "NVIDIA-Certified Associate: AI Infrastructure and Operations",
  },
  {
    Question:
      "A data scientist is tasked with extracting meaningful insights from a large customer transaction dataset to improve sales strategies. They decide to use a combination of data mining and visualization techniques. Which of the following approaches should they prioritize to effectively uncover patterns and trends in the dataset?",
    "Question Type": "multi-select",
    "Answer Option 1":
      "Use clustering algorithms to identify customer segments with similar purchasing behaviors.",
    "Explanation 1":
      "Clustering algorithms are effective in grouping data points with similar characteristics, helping to identify distinct customer segments and understand their purchasing behaviors.",
    "Answer Option 2":
      "Apply linear regression to predict future sales based on past trends.",
    "Explanation 2":
      "While linear regression is useful for prediction, the focus here is on uncovering patterns and trends, which is better served by clustering and visualization.",
    "Answer Option 3":
      "Create interactive dashboards to allow stakeholders to explore the data visually.",
    "Explanation 3":
      "Interactive dashboards facilitate the exploration of data, enabling stakeholders to visually identify patterns and trends without needing deep technical knowledge.",
    "Answer Option 4":
      "Implement a neural network to automatically generate sales forecasts.",
    "Explanation 4":
      "Neural networks are powerful for making predictions but are not the primary tool for uncovering patterns and trends in the context of this scenario.",
    "Answer Option 5": "",
    "Explanation 5": "",
    "Correct Answers": "1,3",
    "Overall Explanation":
      "To extract insights from large datasets, employing clustering algorithms can help identify hidden patterns such as customer segments, while interactive dashboards enable stakeholders to visually explore and understand these patterns and trends effectively. These approaches align well with the goals of understanding and leveraging customer data to improve sales strategies.",
    Domain: "NVIDIA-Certified Associate: AI Infrastructure and Operations",
  },
  {
    Question:
      "An AI operations team is tasked with analyzing a large dataset of customer transactions to identify purchasing patterns and trends. They decide to use a combination of data mining and data visualization techniques. Which of the following steps should they prioritize to effectively extract insights from the dataset?",
    "Question Type": "multi-select",
    "Answer Option 1":
      "Preprocess the data to handle missing values and outliers",
    "Explanation 1":
      "Preprocessing data is crucial for cleaning and preparing it for analysis, ensuring that missing values and outliers do not skew results.",
    "Answer Option 2":
      "Use clustering algorithms to segment customers into groups with similar purchasing behavior",
    "Explanation 2":
      "Clustering helps in identifying groups of customers with similar behaviors, which is essential for uncovering patterns.",
    "Answer Option 3":
      "Visualize the entire dataset at once to get an immediate overview",
    "Explanation 3":
      "Visualizing the entire dataset at once may lead to clutter and confusion, making it hard to derive meaningful insights.",
    "Answer Option 4":
      "Apply machine learning models without feature selection to predict future trends",
    "Explanation 4":
      "Applying machine learning models without feature selection can lead to overfitting and poor generalization, as irrelevant data may be included.",
    "Answer Option 5":
      "Create interactive dashboards to explore various dimensions of the data",
    "Explanation 5":
      "Interactive dashboards allow for dynamic exploration, helping stakeholders to better understand and interpret the data from multiple perspectives.",
    "Correct Answers": "1,2,5",
    "Overall Explanation":
      "In data analysis, preprocessing is vital for cleaning and organizing the data. Clustering is a data mining technique used to discover patterns by grouping similar data points. Interactive dashboards facilitate deeper insights by allowing users to manipulate and explore the data. These techniques together enable a comprehensive understanding of customer behavior and trends.",
    Domain: "NVIDIA-Certified Associate: AI Infrastructure and Operations",
  },
];
